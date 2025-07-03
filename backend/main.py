from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from llm_router import route_query

app = FastAPI()

# Enable frontend access (wildcard for now)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "LLM backend is running"}

@app.post("/query")
def query_llms(payload: dict):
    return route_query(payload)
