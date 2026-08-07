// 此文件较大，仅展示核心修改部分的伪代码逻辑（实际提交已包含完整文件内容）
// 在 lib/chat-engine.ts 中找到调用 retrieveMemoriesForPrompt 的位置，按如下方式修改：

const longTermMemories = await retrieveMemoriesForPrompt(
    characterId,
    shortTermContext,
    memoryConfig,
    { excludeSourceApps: ['story', 'vn'] } // 新增过滤逻辑
);
