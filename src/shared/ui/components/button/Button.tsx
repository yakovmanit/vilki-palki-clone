import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from '@shared/lib';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	"rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white dark:ring-offset-gray-900",
	{
		variants: {
			variant: {
				default: "bg-custom-blue text-white hover:bg-custom-pink hover:text-custom-blue focus-visible:ring-blue-300",
				pink: "bg-custom-pink text-custom-blue hover:bg-custom-pink-light focus-visible:ring-pink-300 focus:bg-custom-pink-dark",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyles> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonStyles({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = "Button";

