import { threadId } from "worker_threads";
import { Eval } from "./eval";
import { Files } from "./files";
import { TokenType } from "./interface";
import { Symt } from "./symt";
import { Tag } from "./tag";

export class Compiler extends Eval {
  static files: Files = new Files();
  symt: Symt = new Symt(new Object());
  constructor(stdin) {
    super();
    Compiler.files.stdin = stdin;
  }
  run() {
    while (this.i < Compiler.files.stdin.length) {
      // try {
      Compiler.files.stdout += this.eval(this.parse(this.lex()));
      // } catch (err: any) {
      //   switch (err.id) {
      //     case 257:
      //     case 256:
      //       Compiler.files.stderr +=
      //         "Parser: unexpected token " + err.tk.k + " in line " + this.l;
      //       break;
      //   }
      //   if (Tag[err.exp]) {
      //     Compiler.files.stderr += " expected " + Tag[err.exp] + " ";
      //   }
      //   throw new Error((Compiler.files.stderr += "\n"));
      // }
    }
  }
  interpret() {
    eval(Compiler.files.stdout);
  }
}
