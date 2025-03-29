
export type ObservableEvent = string;

export interface ObservableDestructor {
    (): void;
}

export interface ObservableListener<T> {
    (event: T): void;
}

export interface ObservableService<EventT extends ObservableEvent> {
    addEventListener(event: EventT, listener: ObservableListener<EventT>) : ObservableDestructor;
}
