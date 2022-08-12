import Block from './Block';

export default function renderDom(query: string, block: Block) {
    const root = document.querySelector(query) as HTMLElement;

    if (!root) {
        throw new Error('Root not found');
    }
    root.innerHTML = '';
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}
