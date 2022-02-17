import * as React from 'react';
import "../styles/App.css"
import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material';



export default function LanguagesChart(props) {
    const { languages } = props
    let dataSample = []
    dataSample.push(languages)
    const keyList = Object.keys(dataSample[0])
    // console.log(item.languages_url)
    return (
        <Box sx={{
            height: 20,
        }}>
            <ResponsiveBar
                // data={languages}
                data={dataSample}
                keys={keyList}
                margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
                padding={0}
                layout="horizontal"
                colors={{ scheme: 'paired' }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridY={false}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                isInteractive={false}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
            />
        </Box>

    );
}
