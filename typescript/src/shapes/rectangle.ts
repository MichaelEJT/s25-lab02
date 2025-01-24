import { Shape } from "./shape";



function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        },
        computePerimeter: function (): number {
            return 2 * (width + height)
        }
    }
}

export { newRectangle }
