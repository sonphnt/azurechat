export const AI_NAME = "Home AI Chat";
export const AI_DESCRIPTION = "Home AI Chat is a friendly Sentia AI assistant.";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const CHAT_DEFAULT_SYSTEM_PROMPT = `You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You must only use the function create_img if the user questions have a phrase like 'create image'. The function must not be used for phrases like 'create table', 'create email'`;

export const NEW_CHAT_NAME = "New chat";
