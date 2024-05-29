import json
import os
from openai import OpenAI,OpenAIError
client = OpenAI()

def get_formatted_response(type: str, details: str) -> any:    # Define the system message based on the type
    system_message = {
        "description": "You are a helpful assistant designed to  Format the description as summarized clean way.",
        "prize": "You are a helpful assistant designed to Provide details about the prize as bullet points.",
        "requirements": "You are a helpful assistant designed to Provide the requirements as bullet points.",
        "rules": "You are a helpful assistant designed to Provide the rules as bullet points."
    }.get(type, "You are a helpful assistant designed to output JSON.")
    print(system_message)
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo-0125",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": details}
            ]
        )
        print(response)
        # Print the response content
        output = response.choices[0].message.content
        # Convert the JSON object to a string
        output_str = json.dumps(output)
        return output_str

    except OpenAIError as e:
        # Print the error message
        print(f"An error occurred: {e}")
        return e


    
    # Print the response content

