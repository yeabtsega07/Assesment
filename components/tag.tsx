export type TagProps = {
    text: string;
  };
  

export const Tag: React.FC<TagProps> = ({ text }: TagProps) => {
    const isOpen = text === 'Open Now';
    const color = isOpen ? '#54B752' : '#D05858';
    const bgColor = isOpen ? '#B8FFB7' : '#FDC6C6';

    return (
        <div
            style={{
                color: color,
                backgroundColor: bgColor,
                border: 'none',
            }}
            className={`rounded-full p-2 flex justify-center items-center w-[98px] h-[22px] text-sm font-semibold`}
        >
            <div className={`font-epilogue font-semibold text-[12px] text-${color}`}>
                {text}
            </div>
        </div>
    );
};