import multer from 'multer';

const upload = multer();

export const uploadCSV = () => upload.single('csv');
