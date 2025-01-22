import { Shape } from "./shape";

interface Rectangle extends Shape{
    width: number,
    height: number,
    computeArea: () => number,
    computePerimeter: () => number
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        },
        computePerimeter: function (): number {
            return 2 * (width + height)
        }
    }
}

export { Rectangle, newRectangle }
