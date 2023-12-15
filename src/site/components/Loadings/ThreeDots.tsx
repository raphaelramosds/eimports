import ContentLoader from 'react-content-loader'

export function ThreeDots() {
    return (
        <ContentLoader
            viewBox="0 0 400 160"
            height={20}
            width={'100%'}
            backgroundColor="transparent"
        >
            <circle cx="100" cy="86" r="30" />
            <circle cx="200" cy="86" r="30" />
            <circle cx="300" cy="86" r="30" />
        </ContentLoader>
    )
}