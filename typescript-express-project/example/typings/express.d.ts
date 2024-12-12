import Express from 'express';

// 여기에 코드를 작성하세요
declare global {
  namespace Express {
    interface Request {
      valid: boolean;
    }
  }
}
