export interface ServerElement {
    type: string,
    name: string,
    content: string,
}

export class Server implements ServerElement {
    type: string = 'server';
    constructor(public name: string, public content: string) {}
}

export class Blueprint implements ServerElement {
    type: string = 'blueprint';
    constructor(public name: string, public content: string) {}
}