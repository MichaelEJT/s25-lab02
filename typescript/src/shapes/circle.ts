import { Shape } from "./shape";

function circle(radius: number): Shape {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        },
        computePerimeter: function (): number {
            return 2 * Math.PI * radius
        }
    }
}

export { circle }
