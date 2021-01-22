const initState = 0

export default function countRedecer(preState = initState, action) {
    const { data, type } = action
    switch (type) {
        case 'plus':
            return preState + data
        case 'jian':
            return preState - data
        default:
            return preState
    }
}