// Libraries
import React from 'react';

// Templates
import { Header, Content, Footer } from './components/templates';

// Pages
import { QA } from './components/pages/qa';

// Assets
import pages from './assets/pages.jpg';

// Provider
import { CounterProvider } from './provider/use-counter-provider';

// Constants
import { LIMIT_QA } from './shared/constant';

export const Page = () => {
    return (
        <CounterProvider limit={LIMIT_QA} >
            <div style={{ width: 800 }}>
                <img src={pages} height={200} />
                <Header />
                <Content>
                    <QA />
                </Content>
                <Footer />
            </div>
        </CounterProvider>
    )
}