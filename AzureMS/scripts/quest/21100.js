var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && status == 6) {
            qm.sendNext("�� �����̽ô� �ǰ���? ���� �Ŵ��� ������ �������� �ʴ´뵵 �� �Ǹ����� ���� �ſ���. � ���� �Ŵ��� ������ ����������. ������ �κ��� #bŬ��#k�ϸ� �ſ�.");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("���� ������� �ο� ������... �׵鿡 ���� ������ ���� �������� �ʾƿ�. ���𼭿��� �ܿ� ������ �ټ� ���̶�� ��ϸ� ���� ��, �ܸ� ���� �ܼ��� ���� �����. Ȥ�� ���� ��ﳪ�� �� �����Ű���?");
        } else if (status == 1) {
            qm.sendNextPrevS("��ﳪ�� ���� ���� ���µ�...",3);
        } else if (status == 2) {
            qm.sendNextPrev("���� �׷�����. �ϱ� ���� �������� ���ְ� �׸� ȣ��ȣ���Ҹ� ����. ������ �׷��� �ص� ����� ������ Ȯ���� �̻� ������ ������ ��� ���� �� ������. ���� �������? ������������ ���⳪ �ʵ� ��� �Ҿ�����̰�... ��, �׷���. #b����#k!");
        } else if (status == 3) {
            qm.sendNextPrevS("����?",3);
        } else if (status == 4) {
            qm.sendNextPrev("������ ���� �ӿ��� �������� �߱��ϴٰ� ������ ���⸦ �߰��߾��. �Ƹ��� ������ ����ϴ� ������ �����Ǿ ���� �߾ӿ� ������ ������. �����ٴϴٰ� ���� �����̳���? #b���� �Ŵ��� ����#k��...\r\n#i4032372# �̷��� ���� �ǵ�...");
        } else if (status == 5) {
            qm.sendNextPrevS("�׷��� ���� �̻��� ������ �Ŵ��� ������ ������ �־���.",3);
        } else if (status == 6) {
            qm.askAcceptDecline("��, �ٷ� �װſ���. ��Ͽ� ���ϸ� ������ ����� ������ �˾ƺ��ٰ� �ؿ�. ���� ����� �Ŵ��� ������ ����ϴ� �����̶��, �Ŵ��� ������ ����� �� ���� ������ �� �ſ���. � ���� #b�Ŵ��� ������ Ŭ���� �ּ���.#k");
        } else if (status == 7) {
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.sendNext("���� �Ŵ��� ������ �����Ѵٸ� ����� �Ŵ��� ������ ����ϴ� ����, #b�ƶ�#k�� �ſ���.");
            qm.dispose();
        }
    }
}