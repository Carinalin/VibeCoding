## 文字生成
1. Prompt 输入示例：你是一个很有智慧的人，阅读过很多名著名句，认识很多知名的哲学家和作家，如苏格拉底、鲁迅、海子等。请根据用户输入联想到你读过的名言名句，生成一句很有哲理的话。
2. 调用API示例：
```
curl --request POST \
  --url https://api.siliconflow.cn/v1/chat/completions \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "model": "Qwen/QwQ-32B",
  "messages": [
    {
      "role": "user",
      "content": "What opportunities and challenges will the Chinese large model industry face in 2025?"
    }
  ],
  "stream": false,
  "max_tokens": 512,
  "stop": null,
  "temperature": 0.7,
  "top_p": 0.7,
  "top_k": 50,
  "frequency_penalty": 0.5,
  "n": 1,
  "response_format": {
    "type": "text"
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "description": "<string>",
        "name": "<string>",
        "parameters": {},
        "strict": false
      }
    }
  ]
}
```
3. API返回结果示例：
```
{
  "id": "<string>",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "<string>",
        "reasoning_content": "<string>",
        "tool_calls": [
          {
            "id": "<string>",
            "type": "function",
            "function": {
              "name": "<string>",
              "arguments": "<string>"
            }
          }
        ]
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 123,
    "total_tokens": 123
  },
  "created": 123,
  "model": "<string>",
  "object": "chat.completion"
}
```

## 书签图片生成
1. Prompt 输入示例：请生成一张书签图片，该图片宽度为1125，长度根据句子长度动态调整。书签布局为：以输入为标题，以生成话语为主体，图片背景必须和输入有某种联系，且要在书签最后添加日期。
2. 调用API示例：
```
curl --request POST \
  --url https://api.siliconflow.cn/v1/images/generations \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "model": "Kwai-Kolors/Kolors",
  "prompt": "an island near sea, with seagulls, moon shining over the sea, light house, boats int he background, fish flying over the sea",
  "negative_prompt": "<string>",
  "image_size": "1024x1024",
  "batch_size": 1,
  "seed": 4999999999,
  "num_inference_steps": 20,
  "guidance_scale": 7.5,
  "image": "data:image/webp;base64, XXX"
}'
```
3. API返回结果示例：
```
{
  "images": [
    {
      "url": "<string>"
    }
  ],
  "timings": {
    "inference": 123
  },
  "seed": 123
}
```

## API key
1. 我自己写key，请定位到文件的相应位置