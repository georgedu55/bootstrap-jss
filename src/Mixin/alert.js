import {bodyBg} from '../Variables/Body'
import format from 'string-format'
import {darken} from '../Functions/darken'
import {gradientBg} from './gradients'
import {enableGradients} from '../Variables/Options'

export const alertVariant = (background, border, color, ifEnableGraidents=enableGradients) => {
    return {
        color: color,
        extend: gradientBg(background, ifEnableGraidents),
        borderColor: border,
        hr: {
            borderTopColor: darken(border, '5%')
        },
        alertLink: {
            color: darken(color, '10%')
        }
    }
}