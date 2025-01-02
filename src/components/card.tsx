import React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("bg-[#F5F6F3] rounded-[20px]", className)}
            {...props}
        />
    );
});

Card.displayName = "Card";

export default Card;
