<template>
  <div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="memberName"
        label="会员名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="手机号码">
      </el-table-column>
      <el-table-column
        prop="eMail"
        label="邮箱地址">
      </el-table-column>
      <el-table-column
        prop="isVIP"
        label="是否同时是商会会员">
      </el-table-column>
      <el-table-column
        prop="recharge"
        label="充值总计">
      </el-table-column>
      <el-table-column
        prop="recharge"
        label="剩余积分">
      </el-table-column>
      <el-table-column
        prop="valid"
        label="是否有效">
      </el-table-column>
      <el-table-column
        prop="date"
        label="到期日期">
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary" @click.native="getAuditInfo(scope.row)" style="width: 60px">编辑
          </el-button>
          <el-button
            size="mini"
            type="primary" @click.native="getUserInfoItem(scope.row)" style="width: 100px">增加积分
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <add-member-or-integral @closeModal="changeDialogVisible($event)" :dialogVisible="dialogVisible" :modalCtrl="modalCtrl"></add-member-or-integral>
    <audit-member-info @closeAuditModal="changeAuditDialogVisible($event)" :auditDialogVisible="auditDialogVisible" :memberInfoCtrl="memberInfoCtrl"></audit-member-info>
  </div>
</template>

<script>
import AddMemberOrIntegral from '../components/AddMemberOrIntegral'
import AuditMemberInfo from '../components/AuditMemberInfo'
export default {
  name: 'member-search-list',
  components: { AddMemberOrIntegral, AuditMemberInfo },
  props: ['tableData'],
  data () {
    return {
      modalCtrl: {
        modalTitle: '增加积分',
        notAllowedPhone: true,
        notAllowedName: true,
        notAllowedCompany: true,
        memberName: '',
        phoneNumber: '',
        companyName: ''
      },
      memberInfoCtrl: {
        memberName: '',
        companyName: '',
        companyPhoneNumber: '',
        area: '',
        phoneNumber: '',
        email: '',
        endTime: '',
        memberId: ''
      },
      auditDialogVisible: false,
      dialogVisible: false
    }
  },
  methods: {
    changeDialogVisible (val) {
      this.dialogVisible = val
    },
    changeAuditDialogVisible (val) {
      this.auditDialogVisible = val
    },
    getUserInfoItem (item) {
      this.modalCtrl.memberName = item.memberName
      this.modalCtrl.phoneNumber = item.phoneNumber
      this.modalCtrl.companyName = item.memberName
      // console.log(this.modalCtrl)
      this.dialogVisible = true
    },
    getAuditInfo (item) {
      this.memberInfoCtrl = item
      console.log(this.memberInfoCtrl)
      this.auditDialogVisible = true
    }
  }
}
</script>
