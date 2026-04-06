/**
 * hello-openclaw.js
 * OpenClaw 天团自动化开发示例
 */

/**
 * 生成问候语
 * @param {string} name - 被问候者的名字
 * @returns {string} 格式化后的问候语
 */
function sayHello(name) {
  // 错误处理：name 参数为空时使用默认值
  if (!name || typeof name !== 'string' || name.trim() === '') {
    name = 'World';
  }

  return `Hello, ${name.trim()}! Welcome to OpenClaw + Trae automated development.`;
}

// ES Module 导出
export { sayHello };

// 直接运行时输出示例
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(sayHello('OpenClaw天团'));
}