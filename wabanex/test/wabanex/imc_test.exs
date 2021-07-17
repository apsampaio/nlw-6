defmodule Wabanex.IMCTest do
  use ExUnit.Case, async: true

  alias Wabanex.IMC

  describe "calculate/1" do
    test "when the file exists, returns the data" do
      params = %{"filename" => "students.csv"}

      response = IMC.calculate(params)

      expected_response =
        {:ok,
          %{
            "Andre" => 3
          }
        }

      assert response == expected_response
    end

    test "when the file doesn't exists, returns an error" do
      params = %{"filename" => "no_file.csv"}

      response = IMC.calculate(params)

      expected_response =
        {:error, "Error while opening the file"}

      assert response == expected_response
    end
  end
end
