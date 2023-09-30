import * as Node_modulesEact from '@node_modules\react';
import { render, screen, fireEvent } from '@node_modules\react';
import MainSection from './MainSection';

describe('MainSection component', () => {
    test('renders search input', () => {
        render(<MainSection />);
        const searchInput = screen.getByPlaceholderText(' Try Something Search here ...');
        expect(searchInput).toBeInTheDocument();
    });

    test('renders selection menu', () => {
        render(<MainSection />);
        const selectionMenu = screen.getByRole('list');
        expect(selectionMenu).toBeInTheDocument();
    });

    test('renders images', async () => {
        render(<MainSection />);
        const images = await screen.findAllByRole('img');
        expect(images.length).toBeGreaterThan(0);
    });

    test('handles search input change', () => {
        render(<MainSection />);
        const searchInput = screen.getByPlaceholderText(' Try Something Search here ...');
        fireEvent.change(searchInput, { target: { value: 'cats' } });
        expect(searchInput.value).toBe('cats');
    });

    test('handles selection menu click', async () => {
        render(<MainSection />);
        const selectionMenu = screen.getByRole('list');
        const selectionItem = await screen.findByText('Nature');
        fireEvent.click(selectionItem);
        expect(selectionMenu).not.toBeInTheDocument();
    });

    test('handles image download', async () => {
        render(<MainSection />);
        const downloadButton = await screen.findByText('Download');
        fireEvent.click(downloadButton);
        expect(downloadButton).toBeInTheDocument();
    });

    test('renders download button for each image', () => {
        const images = [
            { id: 1, urls: { small: 'https://example.com/image1.jpg' } },
            { id: 2, urls: { small: 'https://example.com/image2.jpg' } },
        ];
        render(<MainSection images={images} />);
        const downloadButtons = screen.getAllByText('Download');
        expect(downloadButtons).toHaveLength(images.length);
    });

    test('calls handleDownload function when download button is clicked', () => {
        const handleDownload = jest.fn();
        const images = [
            { id: 1, urls: { small: 'https://example.com/image1.jpg' } },
            { id: 2, urls: { small: 'https://example.com/image2.jpg' } },
        ];
        render(<MainSection images={images} handleDownload={handleDownload} />);
        const downloadButtons = screen.getAllByText('Download');
        fireEvent.click(downloadButtons[0]);
        expect(handleDownload).toHaveBeenCalledWith(images[0].urls.small, 0);
    });

    // New test
    test('renders no images message when no images are found', async () => {
        render(<MainSection images={[]} />);
        const noImagesMessage = await screen.findByText('No images found');
        expect(noImagesMessage).toBeInTheDocument();
    });
});