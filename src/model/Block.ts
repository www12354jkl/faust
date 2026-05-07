export type BlockType = 'text' | 'code' | 'demo';

interface TextBlock {
    type: 'text';
    content: string;
}

interface CodeBlock {
    type: 'code';
    content: string;
    lang: string;
    label?: string;
}

interface DemoBlock {
    type: 'demo';
    component: string;
    label?: string;
    isRunning?: boolean;
}

// 联合类型
export type Block = TextBlock | CodeBlock | DemoBlock;