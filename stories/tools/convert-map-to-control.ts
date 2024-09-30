export const convertMapToControl = <E extends {}>(map: E) => {
    const keys = Object.keys(map)

    return ({
        control: { type: 'select'} as const,
        options: keys,
        mapping: map,
        table: {
            type: { summary: keys.join(', ') },
        },
    })
}