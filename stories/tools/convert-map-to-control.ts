export const convertMapToControl = (map: Record<string, string>) => {
    return ({
        control: { type: 'select'},
        options: Object.keys(map),
        mapping: map,
    })
}