import { ImageResponse } from 'next/og';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'NOT FOUND';

        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundColor: 'black',
                        backgroundSize: '150px 150px',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                    </div>
                    <div
                        style={{
                            fontSize: 20,
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            letterSpacing: '-0.025em',
                            color: 'white',
                            padding: '10px',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                            textWrap: 'pretty'
                        }}
                    >
                        {title}
                    </div>
                </div>
            ),
            {
                width: 100,
                height: 100,
            },
        );
    } catch (e) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}