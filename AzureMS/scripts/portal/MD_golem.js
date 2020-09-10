


/*

	ǻ�� �¶��� �ҽ� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : �񷽻��4

	��Ż ���� : �̴ϴ��� ����


*/

var map = 100040500;
var exit = 100040400;

function enter(pi) {
    if (pi.getPlayer().getMapId() == map) {
        var eim = pi.getEventInstance();
        if (eim == null) {
            pi.warp(100040400);
            return true;
        }
        eim.removePlayer(pi.getPlayer());
        pi.warp(100040400);
        pi.getPlayer().message(5, "�̴ϴ��� �ν��Ͻ����� �����߽��ϴ�.");
        return true;
    } else {
        var em = pi.getEventManager("MiniDungeon");
        if (em == null) {
            pi.getPlayer().message(5, "�̴ϴ��� ��ũ��Ʈ�� ������ �߻��߽��ϴ�. GM���� ������ �ּ���.");
            return false;
        }
        if (pi.getPlayer().getParty() != null) {
            if (!pi.allMembersHere()) {
                pi.getPlayer().message(5, "��Ƽ���� ��� ���־�� ������ �� �ֽ��ϴ�.");
                return false;
            }
            if (!pi.isLeader()) {
                pi.getPlayer().message(5, "��Ƽ���� ������ �� �ֽ��ϴ�.");
                return false;
            }
            em.setProperty("Leader_"+pi.getPlayer().getParty().getLeader().getId()+"_Exit", pi.getPlayer().getMapId()+"");
            em.setProperty("Leader_"+pi.getPlayer().getParty().getLeader().getId()+"_Map", map+"");
            em.startInstance(pi.getParty(), pi.getPlayer().getMap());
            pi.getPlayer().message(5, "�̴ϴ��� �ν��Ͻ��� ����Ǿ����ϴ�.");
            var eim = pi.getPlayer().getEventInstance();
            eim.startEventTimer(7200000);
            return true;
        } else {
            em.setProperty("Leader_"+pi.getPlayer().getId()+"_Exit", pi.getPlayer().getMapId()+"");
            em.setProperty("Leader_"+pi.getPlayer().getId()+"_Map", map+"");
            em.startInstance(pi.getPlayer());
            pi.getPlayer().message(5, "�̴ϴ��� �ν��Ͻ��� ����Ǿ����ϴ�.");
            var eim = pi.getPlayer().getEventInstance();
            eim.startEventTimer(7200000);
            return true;
        }
    }
            
        
}