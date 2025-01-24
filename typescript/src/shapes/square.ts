import { Shape } from "./shape"

function square(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        },
        computePerimeter: function (): number {
            return 4 * sideLen
        }
    }
}

export { square }