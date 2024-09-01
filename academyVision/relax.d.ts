declare module 'rellax' {
    interface RellaxOptions {
      speed?: number;
      center?: boolean;
      wrapper?: string | HTMLElement | null | undefined;
      round?: boolean;
      vertical?: boolean;
      horizontal?: boolean;
    }
  
    class Rellax {
      constructor(selector: string | Element, options?: RellaxOptions);
      destroy(): void;
    }
  
    export = Rellax;
  }