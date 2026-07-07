'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

type ToastType = 'success' | 'error';

type Toast = {
    id: number;
    type: ToastType;
    title: string;
    description?: string;
};

type ToastContextValue = {
    showToast: (type: ToastType, title: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);
const TOAST_DURATION = 4500;

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: number) => void }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const enter = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(enter);
    }, []);

    const handleDismiss = () => {
        setVisible(false);
        setTimeout(() => onDismiss(toast.id), 200);
    };

    useEffect(() => {
        const timer = setTimeout(handleDismiss, TOAST_DURATION);
        return () => clearTimeout(timer);
    }, []);

    const isSuccess = toast.type === 'success';

    return (
        <div role='status' aria-live='polite' className={`flex items-start gap-2 sm:gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:p-4 shadow-lg transition-all duration-300 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-base sm:text-lg ${isSuccess ? 'bg-[#7b55ce]/10 text-[#7b55ce]' : 'bg-red-50 text-red-500'}`}>
                <i className={isSuccess ? 'ri-checkbox-circle-fill' : 'ri-error-warning-fill'}></i>
            </div>

            <div className='flex flex-col min-w-0 flex-1'>
                <p className='text-sm sm:text-base font-medium tracking-tight text-gray-900'>{toast.title}</p>

                {toast.description && <p className='mt-0.5 text-xs sm:text-sm text-[#565d6e] font-light leading-relaxed'>{toast.description}</p>}
            </div>

            <button onClick={handleDismiss} aria-label='Dismiss notification' className='shrink-0 text-gray-400 hover:text-gray-600 duration-300 text-base sm:text-lg cursor-pointer'>
                <i className='ri-close-line'></i>
            </button>
        </div>
    );
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const showToast = useCallback((type: ToastType, title: string, description?: string) => {
        const id = Date.now() + Math.random();
        setToasts((prev) => [...prev, { id, type, title, description }]);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <div className='fixed top-4 right-3 sm:top-6 sm:right-6 z-100 flex flex-col gap-3 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-sm pointer-events-none'>
                {toasts.map((toast) => (
                    <div key={toast.id} className='pointer-events-auto'>
                        <ToastItem toast={toast} onDismiss={removeToast} />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}
