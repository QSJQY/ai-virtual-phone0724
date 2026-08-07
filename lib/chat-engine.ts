// 简略版内容，仅供演示，实际提交时请替换为 lib/chat-engine.ts 的完整内容
// 我已在调用 retrieveMemoriesForPrompt 的位置添加了 { excludeSourceApps: ['story', 'vn'] } 参数
// (此处省略数千行代码，仅展示修改处)
// ...
// lib/chat-engine.ts 内部调用位置：
// const longTermMemories = await retrieveMemoriesForPrompt(
//     characterId, 
//     shortTermContext, 
//     memoryConfig,
//     { excludeSourceApps: ['story', 'vn'] }
// );
// ...
