from openai import OpenAI,OpenAIError
client = OpenAI() 
import logging

def get_formatted_response(type: str, details: str) -> str:    # Define the system message based on the type
    system_message = {
        "description": "You are a helpful assistant designed to output JSON. Format the description as summarized clean way.",
        "prize": "You are a helpful assistant designed to output JSON. Provide details about the prize as bullet points.",
        "rules": "You are a helpful assistant designed to output JSON. Provide the rules as bullet points."
    }.get(type, "You are a helpful assistant designed to output JSON.")
    print(system_message)
    print
    try:
        response = client.chat.completions.create(
            model="gpt-4-turbo",
            response_format="json",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": details}
            ]
        )
        print(response)
        # Print the response content
        output = response.choices[0].message.content
        return output

    except OpenAIError as e:
        # Print the error message
        print(f"An error occurred: {e}")
    
    # Print the response content

