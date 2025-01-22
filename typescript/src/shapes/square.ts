import { Rectangle } from "./rectangle"

function square(sideLen: number): Rectangle {
    return {
        width: sideLen,
        height: sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        },
        computePerimeter: function (): number {
            return 4 * sideLen
        }
    }
}

export { square }