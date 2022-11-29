import { Router } from 'express';
import mailRoutes from './mail.routes';

const router = Router();

router.use('/mail', mailRoutes);

export default router;
