import * as React from "react"
import { motion, motionValue } from "@framer"

/**
 * An example of providing a MotionValue to an SVG component via its props
 */

export const App = () => {
    return (
        <svg
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.rect
                height="100"
                width="100"
                x={motionValue(50)}
                y={50}
                data-testid="rotate"
                style={{ rotate: 45 }}
            />
            {/* <motion.rect
                height="100"
                width="100"
                x={50}
                y={200}
                data-testid="scale"
                style={{ scale: 2 }}
            />
            <motion.rect
                height="100"
                width="100"
                x={50}
                y={350}
                data-testid="translate"
                style={{ x: 100 }}
            /> */}
        </svg>
    )
}
