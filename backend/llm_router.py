def route_query(payload):
    prompt = payload.get("prompt", "")
    return {
        "gpt-4": f"Mock GPT-4 response to: {prompt}",
        "claude": "Mock Claude response"
    }