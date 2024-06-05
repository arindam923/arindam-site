import Image from "next/image"


type StackAvatarProps = {
    images: string[]
}


const StackAvatar: React.FC<StackAvatarProps> = ({ images }) => {
    return (
        <div className="flex  items-center">
            {images.map((item, index) => (
                <Image
                    key={index}
                    src={item}
                    alt=""
                    width={30}
                    height={30}
                    className={`rounded-full shadow-md ml-[${index * 2}px]`}
                />
            ))}
        </div>
    )
}

export default StackAvatar