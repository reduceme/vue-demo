<template>
  <div>
    <el-dialog
      :title="modalCtrl.modalTitle"
      :visible.sync="dialogVisible"
      width="580px"
      :show-close="false"
      :close-on-click-modal="false">
      <el-form ref="formData" :model="formData" label-width="100px">
        <el-form-item class="require-content" label="手机号码：">
          <el-popover
            placement="bottom-start"
            width="200"
            trigger="manual"
            content="请输入手机号码"
            v-model="popoverFlag.phoneFlag">
            <el-input :disabled="modalCtrl.notAllowedPhone" @keyup.native="popoverHide" slot="reference"
                      placeholder="请输入手机号码" v-model="formData.phoneNumber"></el-input>
          </el-popover>
        </el-form-item>
        <el-form-item label="会员名称：">
          <el-input :disabled="modalCtrl.notAllowedName" placeholder="请输入会员名称" v-model="formData.memberName"></el-input>
        </el-form-item>
        <el-form-item label="公司名称：">
          <el-input :disabled="modalCtrl.notAllowedCompany" placeholder="请输入公司名称"
                    v-model="formData.companyName"></el-input>
        </el-form-item>
        <el-form-item class="require-content" label="增加积分：">
          <el-popover
            placement="bottom-start"
            width="200"
            trigger="manual"
            content="请填写积分"
            v-model="popoverFlag.integral">
            <el-input slot="reference" @keyup.native="popoverHide" placeholder="请输入积分"
                      v-model="formData.integral"></el-input>
          </el-popover>
        </el-form-item>
        <el-form-item class="require-content" label="充值金额：">
          <el-popover
            placement="bottom-start"
            width="200"
            trigger="manual"
            content="请填写金额"
            v-model="popoverFlag.money">
            <el-input slot="reference" @keyup.native="popoverHide" placeholder="请输入金额"
                      v-model="formData.money"></el-input>
          </el-popover>
        </el-form-item>
        <el-form-item class="require-content" label="备注：">
          <el-popover
            placement="bottom-start"
            width="200"
            trigger="manual"
            content="请填写备注"
            v-model="popoverFlag.remark">
            <el-input slot="reference" @keyup.native="popoverHide" type="textarea" placeholder="请输入内容……"
                      v-model="formData.remark"></el-input>
          </el-popover>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native="closeModal">取 消</el-button>
        <el-button type="primary" @click.native="addNewMember">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'add-member-or-integral',
  props: {
    dialogVisible: Boolean,
    modalCtrl: Object
  },
  data () {
    return {
      popoverFlag: {
        phoneFlag: false,
        integral: false,
        money: false,
        remark: false
      },
      localDialogVisible: this.dialogVisible,
      formData: {
        phoneNumber: '',
        memberName: '',
        companyName: '',
        integral: '',
        money: '',
        remark: ''
      }
    }
  },
  methods: {
    addNewMember () {
      if (this.formData.phoneNumber === '') {
        this.popoverFlag.phoneFlag = true
        return
      }
      if (this.formData.integral === '') {
        this.popoverFlag.integral = true
        return
      }
      if (this.formData.money === '') {
        this.popoverFlag.money = true
        return
      }
      if (this.formData.remark === '') {
        this.popoverFlag.remark = true
        return
      }
      console.log(this.modalCtrl)
      console.log(this.formData)
    },
    closeModal () {
      this.popoverFlag.phoneFlag = false
      this.popoverFlag.integral = false
      this.popoverFlag.money = false
      this.popoverFlag.remark = false
      this.localDialogVisible = false
      this.$emit('closeModal', this.localDialogVisible)
    },
    popoverHide () {
      this.popoverFlag.phoneFlag = false
      this.popoverFlag.integral = false
      this.popoverFlag.money = false
      this.popoverFlag.remark = false
    }
  },
  mounted () {
    // console.log(this.$parent.modalCtrl)
  },
  watch: {
    // 如果 `modalCtrl` 发生改变，这个函数就会运行
    modalCtrl: {
      handler (newModalCtrl, oldModalCtrl) {
        this.formData.phoneNumber = newModalCtrl.phoneNumber
        this.formData.memberName = newModalCtrl.memberName
        this.formData.companyName = newModalCtrl.companyName
        console.log(this.formData)
      },
      deep: true
    }
  }
}
</script>

<style>
  @import "../style/style.scss";

  .el-dialog__body .el-input {
    width: 95%;
  }
</style>
