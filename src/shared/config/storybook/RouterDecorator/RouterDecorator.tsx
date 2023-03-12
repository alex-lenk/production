import { ReactNode } from 'react';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story() as unknown as ReactNode}
    </BrowserRouter>
);
