import React from 'react';
import { render } from '@testing-library/react';
import SearchItem from '../src/components/molecules/SearchItem';

describe('SearchItem component', () => {
    const itemProps = {
      title: 'Test Title',
      imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/2a/e1/fc/2ae1fc34-a98d-20bf-33ed-71e321773b0a/dj.lykipmdm.jpg/100x100bb.jpg',
      collectionName: 'Test Collection',
      artistName: 'Test Artist',
      type: 'Test Type',
    };
  
    it('renders with the correct title', () => {
      const { getByText } = render(<SearchItem {...itemProps} />);
      const titleElement = getByText(itemProps.title);
      expect(titleElement).toBeInTheDocument();
    });
  
    it('renders with the correct collection name', () => {
      const { getByText } = render(<SearchItem {...itemProps} />);
      const collectionNameElement = getByText(`Collection Name : ${itemProps.collectionName}`);
      expect(collectionNameElement).toBeInTheDocument();
    });
    it('renders with the correct artistName', () => {
        const { getByText } = render(<SearchItem {...itemProps} />);
        const collectionNameElement = getByText(`Artist : ${itemProps.artistName}`);
        expect(collectionNameElement).toBeInTheDocument();
      });

      it('renders with the correct type', () => {
        const { getByText } = render(<SearchItem {...itemProps} />);
        const collectionNameElement = getByText(`Type :  ${itemProps.type}`);
        expect(collectionNameElement).toBeInTheDocument();
      });
   
  });
  