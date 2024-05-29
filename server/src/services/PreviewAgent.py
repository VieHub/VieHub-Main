import json
import os
from openai import OpenAI,OpenAIError
client = OpenAI()
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
# Define the function to interact with OpenAI
# def get_ai_preview(details: dict) -> dict:
#     llm = ChatOpenAI(model="gpt-3.5-turbo-0125", temperature=0)

#     system_message = SystemMessage(
#         content="You are a helpful assistant. Format the provided contest details as follows\n"
#                 "1. Summarize the description.\n"
#                 "2. Ensure the requirements, what to build, rules, and prize details have bullet points and are bold like the given template.\n\n"
#                 "Template:\n"
#                 "**Requirements**:\n"
#                 "- Bullet 1\n"
#                 "- Bullet 2\n\n"
#                 "**What to Build**:\n"
#                 "- Bullet 1\n"
#                 "- Bullet 2\n\n"
#                 "**Rules**:\n"
#                 "- Bullet 1\n"
#                 "- Bullet 2\n\n"
#                 "**Prizes**:\n"
#                 "- Bullet 1\n"
#                 "- Bullet 2\n"
#     )

#     # Extract specific fields to be formatted
#     fields_to_format = {
#         "description": details.get("description"),
#         "requirements": details.get("requirements"),
#         "whatToBuild": details.get("whatToBuild"),
#         "rules": details.get("rules"),
#         "prizeDetails": details.get("prizeDetails")
#     }

#     human_message = HumanMessage(content=json.dumps(fields_to_format))
    
#     response = llm.invoke([system_message, human_message])
    
#     try:
#         print("Raw response content:", response.content)
#         formatted_fields = json.loads(response.content)
#     except json.JSONDecodeError as e:
#         print("Failed to decode JSON response:", e)
#         print("Response content:", response.content)
#         return {"error": "Failed to decode JSON response"}

#     for key in formatted_fields:
#         if key in details:
#             details[key] = formatted_fields[key]
    
#     return details



# Define the function to interact with OpenAI

# Define the function to interact with OpenAI
def get_ai_preview(details: dict) -> dict:
    llm = ChatOpenAI(model="gpt-3.5-turbo-0125", temperature=0)

    system_message = SystemMessage(
        content="You are a helpful assistant. Format the provided contest details as follows:\n"
                "1. Summarize the description without bullet points or anything..\n"
                "2. Ensure the requirements, what to build, rules, and prize details have bullet points and are bold like the given template.\n\n"
                "Template:\n"
                "**Requirements**:\n"
                "- Bullet 1\n"
                "- Bullet 2\n\n"
                "**What to Build**:\n"
                "- Bullet 1\n"
                "- Bullet 2\n\n"
                "**Rules**:\n"
                "- Bullet 1\n"
                "- Bullet 2\n\n"
                "**Prizes**:\n"
                "- Bullet 1\n"
                "- Bullet 2\n"
    )

    # Extract specific fields to be formatted
     # Extract specific fields to be formatted
    fields_to_format = {
        "description": details.get("description"),
        "requirements": details.get("requirements"),
        "whatToBuild": details.get("whatToBuild"),
        "rules": details.get("rules"),
        "prizeDetails": details.get("prizeDetails")
    }

    human_message = HumanMessage(content=json.dumps(fields_to_format))
    
    response = llm.invoke([system_message, human_message])
    
    try:
        formatted_text = response.content
        # print("Formatted Text:", formatted_text)
        
        # Extract the formatted sections
        sections = formatted_text.split("\n\n")
        formatted_details = {}
        
        for section in sections:
            if section.startswith("**Description**:"):
                formatted_details["description"] = section[len("**Description**:") + 1:].strip()
            elif section.startswith("**Requirements**:"):
                formatted_details["requirements"] = "\n- ".join(section[len("**Requirements**:") + 1:].strip().split("\n- "))
            elif section.startswith("**What to Build**:"):
                formatted_details["whatToBuild"] = "\n- ".join(section[len("**What to Build**:") + 1:].strip().split("\n- "))
            elif section.startswith("**Rules**:"):
                formatted_details["rules"] = "\n- ".join(section[len("**Rules**:") + 1:].strip().split("\n- "))
            elif section.startswith("**Prizes**:"):
                formatted_details["prizeDetails"] = "\n- ".join(section[len("**Prizes**:") + 1:].strip().split("\n- "))
        
    except Exception as e:
        print("Failed to process response:", e)
        return {"error": "Failed to process response"}

    for key in formatted_details:
        if key in details:
            details[key] = formatted_details[key]
    
    return details