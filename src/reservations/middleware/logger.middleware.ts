import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){

        const ahoraMismo = new Date();
        const fechaHora = ahoraMismo.toLocaleString('es-ES', {
            timeZone: 'America/Bogota'
        })

        console.log(`solicitud entrante: ${req.method} ${req.url} fecha ${fechaHora} `);
        next()
    }
}