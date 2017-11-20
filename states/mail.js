let states = require("../states").states;

function Mail(socket) {
    socket.on(states.MAIL_WRITE, (machine, socket, data) => {
        this.stateWrite(machine, socket, data);
    })
}

Mail.prototype.stateWrite = function(machine, socket, data) {
    console.log("state write");
    if (!machine.action) {
        console.log("state write home");
        this.stateWriteHome(machine, socket, data);
    } else {
        console.log("inside not login else");
        switch (machine.action) {
            case 'wait':
                console.log("inside not login wait");
                this.stateWriteWait(machine, socket, data);
                break;
        }
    }
}

Mail.prototype.stateWriteHome = function(machine, socket, data) {
    socket.write('\n请输入你要修改的内容，\n\t1.收件人地址\n\t2.标题\n\t3.正文内容\n\t4.发送邮件\n');
    machine.action = 'wait';
}

Mail.prototype.stateWriteWait = function(machine, socket, data) {
    console.log("state write");
}

exports.Mail = Mail;