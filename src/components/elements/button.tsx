import {HtmlHTMLAttributes, MouseEventHandler} from "react"
import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

type Props = HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  /**
   * Display a larger button.
   */
  big?: boolean
  /**
   * Display a secondary styled button.
   */
  secondary?: boolean
  /**
   * Center the button in the container.
   */
  centered?: boolean
  /**
   * Click handler, mostly when using a button element.
   */
  onClick?: MouseEventHandler
  /**
   * Type of button: submit, reset, or button.
   */
  type?: HTMLButtonElement["type"]
  /**
   * Disabled button element.
   */
  disabled?: boolean
}

export const Button = ({big = false, secondary = false, centered = false, children, className, ...props}: Props) => {
  const standardClasses = clsx({
    "flex items-center w-fit mx-auto": centered,
    "inline-block text-center w-fit": !centered,
    "btn btn--big transition text-5xl text-white hocus:text-white bg-digital-red hocus:bg-black no-underline hocus:underline py-6 px-12 font-normal":
      big && !secondary,
    "btn btn--secondary transition text-digital-red border-2 border-digital-red hocus:border-black no-underline hocus:underline py-4 px-8 font-normal":
      !big && secondary,
    "btn  btn--big btn--secondary transition text-5xl text-digital-red border-2 border-digital-red hocus:border-black no-underline hocus:underline py-6 px-12 font-normal":
      big && secondary,
    "btn bg-digital-red font-normal text-white hocus:bg-black hocus:text-white py-4 px-8 no-underline hocus:underline transition":
      !big && !secondary,
  })

  return (
    <button className={twMerge(standardClasses, className)} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
