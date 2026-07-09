export default function ThemeIcon({ className = '' }: { className?: string }) {
    return (
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
            <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' />

            <line x1='12' y1='3' x2='12' y2='21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />

            <line x1='12' y1='8.6' x2='17.1' y2='4.58' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />

            <line x1='12' y1='13.43' x2='19.69' y2='7.32' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />

            <line x1='12' y1='18.2' x2='20.97' y2='11.24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        </svg>
    )
}