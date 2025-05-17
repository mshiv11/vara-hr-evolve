
interface CalNamespace {
  (method: string, ...args: any[]): void;
  q?: any[];
  ns?: Record<string, any>;
  [key: string]: any;
}

interface Window {
  Cal?: {
    ns: {
      vara: {
        (method: string, ...args: any[]): void;
        q?: any[];
        showModal: (options: any) => void;
      };
    };
    q?: any[];
    loaded?: boolean;
    [key: string]: any;
  };
}
