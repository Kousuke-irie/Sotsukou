import {useEffect,useState} from 'react';

export const mediaQuery = {
    mobile: 'width < 1122px',
    pc: '1122px <= width',
}

export const useMediaQuery = (query?: string) => {
    const formattedQuery = `(${query})`
    const [match, setMatch] = useState(matchMedia(formattedQuery).matches);

    useEffect(() => {
        const mql = matchMedia(formattedQuery)

        if (mql.media === 'not all' || mql.media === 'invalid') {
            console.error('useMedia query mismatch');
        }

        mql.onchange = (e) => {
            setMatch(e.matches)
        }

        return () => {
            mql.onchange = null;
        }
    },[formattedQuery, setMatch])

    return match
}