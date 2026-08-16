const Logo = ({ variant = 'dark', showText = true, className = '' }) => {
  const isLight = variant === 'light';
  const mark = isLight ? '#FBF8F3' : '#1B4332';
  const veinColor = isLight ? '#1B4332' : '#FBF8F3';
  const wordColor = isLight ? 'text-white' : 'text-jungle';
  const subColor = isLight ? 'text-sand' : 'text-sunset';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="22" cy="22" r="21" stroke={mark} strokeWidth="1.3" />
        <path
          d="M22 8C15.5 12 11.5 18 12.5 24.5C13.2 29 17 32 21.5 31.6C27 31.1 31 26 30 19.5C29.2 14.3 25.8 10.2 22 8Z"
          fill={mark}
        />
        <path d="M22 11.5C22 18 22 24.5 17.5 29" stroke={veinColor} strokeWidth="1" strokeLinecap="round" />
        <circle cx="31.5" cy="14" r="2.6" fill="#D9662C" />
      </svg>
      {showText && (
        <span className="leading-none">
          <span className={`block font-serif text-[1.15rem] tracking-wide ${wordColor}`}>Serendiva</span>
          <span className={`block text-[9px] font-medium tracking-[0.35em] uppercase mt-0.5 ${subColor}`}>Trails</span>
        </span>
      )}
    </span>
  );
};

export default Logo;