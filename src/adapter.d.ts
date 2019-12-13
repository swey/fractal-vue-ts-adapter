import { Adapter } from '@frctl/fractal';

declare class VueAdapter<TEngine = any> extends Adapter<TEngine> {
	render(path: string, str: string, context: any, meta: any): Promise<string>;
}

export interface AdapterExport {
	register(source: any, app: any): VueAdapter<any>;
}

export default function(config?: any): AdapterExport;