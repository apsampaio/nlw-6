import 'package:flutter/material.dart';
import 'package:flutter_masked_text2/flutter_masked_text2.dart';
import 'package:payflow/modules/insert_boleto/insert_boleto_controller.dart';
import 'package:payflow/shared/themes/app_colors.dart';
import 'package:payflow/shared/themes/app_text_styles.dart';
import 'package:payflow/shared/widgets/input_text/input_text_widget.dart';
import 'package:payflow/shared/widgets/set_label_buttons/set_label_buttons.dart';

class InsertBoletoPage extends StatefulWidget {
  final String? barcode;
  const InsertBoletoPage({Key? key, this.barcode}) : super(key: key);

  @override
  State<InsertBoletoPage> createState() => _InsertBoletoPageState();
}

class _InsertBoletoPageState extends State<InsertBoletoPage> {
  final controller = InsertBoletoController();

  final moneyInputTextController = MoneyMaskedTextController(
      leftSymbol: "R\$", initialValue: 0, decimalSeparator: ",");
  final vencimentoInputTextController =
      MaskedTextController(mask: "00/00/0000");
  final codigoInputTextController = TextEditingController();

  @override
  void initState() {
    if (widget.barcode != null) {
      codigoInputTextController.text = widget.barcode!;
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        leading: BackButton(
          color: AppColors.input,
        ),
        backgroundColor: AppColors.background,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 93, vertical: 24),
                child: Text(
                  "Preencha os dados do boleto",
                  style: TextStyles.titleBoldHeading,
                  textAlign: TextAlign.center,
                ),
              ),
              Form(
                  key: controller.formKey,
                  child: Column(children: [
                    InputTextWidget(
                      label: "Nome do boleto",
                      icon: Icons.description_outlined,
                      validator: controller.validateName,
                      onChanged: (value) {
                        controller.onChange(name: value);
                      },
                    ),
                    InputTextWidget(
                      label: "Vencimento",
                      controller: vencimentoInputTextController,
                      validator: controller.validateVencimento,
                      icon: Icons.highlight_off,
                      onChanged: (value) {
                        controller.onChange(dueDate: value);
                      },
                    ),
                    InputTextWidget(
                      controller: moneyInputTextController,
                      label: "Valor",
                      icon: Icons.paid_outlined,
                      validator: (_) => controller
                          .validateValor(moneyInputTextController.numberValue),
                      onChanged: (value) {
                        controller.onChange(
                            value: moneyInputTextController.numberValue);
                      },
                    ),
                    InputTextWidget(
                      controller: codigoInputTextController,
                      validator: controller.validateCodigo,
                      label: "Código",
                      icon: Icons.subtitles_outlined,
                      onChanged: (value) {
                        controller.onChange(barcode: value);
                      },
                    ),
                  ]))
            ],
          ),
        ),
      ),
      bottomNavigationBar: SetLabelButtons(
        primaryLabel: "Cancelar",
        primaryOnPressed: () {
          Navigator.pop(context);
        },
        secondaryLabel: "Cadastrar",
        secondaryOnPressed: () async {
          await controller.cadastrar();
          Navigator.pop(context);
        },
        enableScondaryColor: true,
      ),
    );
  }
}
